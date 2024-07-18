import React from "react";
import { useParams } from "react-router-dom";
import PropertyImage1 from "../../img/property-1.jpg"; // Import additional property images here
import PropertyImage2 from "../../img/property-2.jpg";
import PropertyImage3 from "../../img/property-3.jpg";

function PropertyDetails({ properties }) {
    const { id } = useParams();
    const property = properties.find(prop => prop.id === parseInt(id));

    if (!property) {
        return <div>Property not found</div>;
    }

    // Additional property images for the slider
    const additionalImages = [PropertyImage2, PropertyImage3]; // Add more images as needed

    return (
        <div className="container-fluid bg-white">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        {/* Main property image */}
                        <img src={property.image} className="img-fluid" style={{ maxHeight: "600px" }} alt={property.name} />
                        {/* Slider for additional images */}
                        <div id="propertyImageSlider" className="carousel slide mt-3" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {property.additionalImages.map((image, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                        <img src={image} className="d-block w-100" style={{ maxHeight: "600px" }} alt={`Additional ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#propertyImageSlider" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#propertyImageSlider" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="">
                        {/* Detailed property information */}
                        <h2>{property.name}</h2>
                        <p>Property ID: {property.id}</p>
                        <p>Price: ${property.price}</p>
                        <p>Description: {property.description}</p>
                        <p>Location: This beautiful property is located in a serene neighborhood, nestled amidst lush greenery and scenic views. It offers a tranquil environment, perfect for relaxation and unwinding after a long day.</p>
                        <p>Features:</p>
                        <ul>
                            <li>Spacious living area with ample natural light</li>
                            <li>Modern kitchen with state-of-the-art appliances</li>
                            <li>Cozy bedrooms with built-in closets</li>
                            <li>Stylish bathroom with luxurious fixtures</li>
                            <li>Private backyard garden with a patio for outdoor entertaining</li>
                        </ul>
                        <p>Rental Amount (Per Year): ${property.rentalAmount * 12}</p>
                        <p>Return per Token (Per Year): ${property.returnPerTokenPerYear}</p>

                    </div>

                </div>
            </div>
            
        </div>
    );
}

export default PropertyDetails;
