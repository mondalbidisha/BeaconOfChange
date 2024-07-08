"use client"
import AppLayout from "@/components/AppLayout";
import CampaignLayout from "@/components/CampaignContainer/CampaignLayout";
import { Loader } from "@/components/Loader";
import React, { useEffect, useState } from "react";
import {
  setKey,
  setLanguage,
  geocode,
  RequestType,
} from "react-geocode";

export default function Waste() {
	const [isLoading, setIsLoading] = useState(true);
	const [userLocation, setUserLocation] = useState({});

	const getLocationInformation = (position: any) => {
		const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
		setKey(apiKey);
		setLanguage(navigator.language)
		geocode(RequestType.LATLNG, `${position.coords.latitude},${position.coords.longitude}`)
		.then(({ results }) => {
				const { city, state, country } = results[0].address_components.reduce(
					(acc: any, component: any) => {
						if (component.types.includes("locality"))
							acc.city = component.long_name;
						else if (component.types.includes("administrative_area_level_1"))
							acc.state = component.long_name;
						else if (component.types.includes("country"))
							acc.country = component.long_name;
						return acc;
					},
					{}
				);

				let location: any = {
					"city": city,
					"state": state,
					"country": country,
				}
				setUserLocation(location)
			})
			.catch(console.error);
	}

	const getBrowserCoordinates = () => {
		const success = (position: any) => {
			getLocationInformation(position)
		}
		const error = (err: any) => {
			console.log(JSON.stringify(err))
		}
		navigator.geolocation.getCurrentPosition(success, error);
	}

	useEffect(() => {
		if(Object.values(userLocation).length > 0) {
			setIsLoading(false);
		} else {
			getBrowserCoordinates();
		}
	}, [Object.values(userLocation).length])

  return (
	<AppLayout>
		<main className="min-h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth">
		{
			isLoading 
			? 
				<Loader 
					message={"Hang on, putting on our superhero capes..."}
				/> 
			: 
				<CampaignLayout location={userLocation}/>
		}
		</main>
	</AppLayout>
    
  );
}