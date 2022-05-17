// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export const Mapdoc = () => {
  return (
    <div className="mt-6 w-full h-80 bg-slate-800">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1716.7362922466564!2d32.26981244841261!3d30.62063628131271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f8597f201556e7%3A0x9bd6053867337ff3!2z2KzYp9mF2LnYqSDZgtmG2KfYqSDYp9mE2LPZiNmK2LM!5e0!3m2!1sar!2seg!4v1652808664287!5m2!1sar!2seg"
        width="600"
        height="450"
        style={{ border: 0 }}
        className="w-full h-full"
        allowfullscreen=""
        loading="lazy"
        title="Google Map"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    // <Map
    //   google={this.props.google}
    //   zoom={14}
    //   initialCenter={{
    //     lat: 30.622218,
    //     lng: 32.266384,
    //   }}
    // >
    //   <Marker onClick={this.onMarkerClick} name={"Current location"} />

    //   <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
    // </Map>
  );
};

export default Mapdoc;
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyD14j5PX38mzxx311N6GEMcU9gpSjFARyI",
// })(Mapdoc);
