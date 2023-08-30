import React, { ReactNode } from "react";
import GoogleMapReact from "google-map-react";

type Props = {
  lat: number;
  lng: number;
  children: ReactNode;
  className?: string;
  zoom?: number;
};
export default function Map({ children, lat, lng, zoom, className }: Props) {
  return (
    <div className={className ?? "h-[calc(100vh-48px)] w-full"}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ?? "",
        }}
        defaultCenter={{
          lat,
          lng,
        }}
        defaultZoom={zoom ?? 13}
        options={{ gestureHandling: "none", zoomControl: false }}
      >
        {children}
      </GoogleMapReact>
    </div>
  );
}
