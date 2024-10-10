import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useLocation } from "react-router-dom";
import UploadImg from "../../images/Upload icon.png";

function ListingImage() {
  const [images, setImages] = useState([]);
  const [errorMess, setErrorMess] = useState("");
  
  const location = useLocation();
  const formData = location.state?.formData || {};
  const navigate = useNavigate();
console.log(formData);

  const handleImgUpload = (e) => {
    const newImages = Array.from(e.target.files);

    if (images.length + newImages.length > 4) {
      setErrorMess("You can only upload a maximum of 4 images.");
      return;
    }

    const updatedImages = [...images, ...newImages];
    setImages(updatedImages);
    setErrorMess("");
  };

  const handleDeleteImage = (index) => {
    const updatedImages = images.filter((_, imgIndex) => imgIndex !== index);
    setImages(updatedImages);
  };

  const triggerFileUpload = () => {
    document.getElementById("img-upload").click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (images.length < 4) {
      setErrorMess("Please upload at least 4 images.");
      return;
    }

    
    const dataToPass = {
      ...formData,
      images: images,
    };

    navigate("/listingdetails", { state: { formData: dataToPass } });
  };

  return (
    <div className="listingimage">
      <section className="pt-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-center listh1">Add New Listing</h1>
              <form onSubmit={handleSubmit} className="add_listing">
                <div className="inner_div">
                  <h1>Upload Images</h1>
                  <p className="mb-5">• All Items Are Mandatory</p>
                  <h2 style={{ textAlign: "center" }}>Upload</h2>
                  <div className="upload-img">
                    <img src={UploadImg} alt="Upload-icon" />
                    <h4 style={{ fontWeight: "bold", marginTop: "20px" }}>
                      Drag & drop files or{" "}
                      <label
                        htmlFor="image-upload"
                        style={{ cursor: "pointer" }}
                      >
                        <span
                          onClick={triggerFileUpload}
                          style={{
                            cursor: "pointer",
                            textDecoration: "underline",
                          }}
                        >
                          Browse
                        </span>
                      </label>
                    </h4>
                    <p>Supported formats: JPEG, PNG</p>
                    <input
                      id="img-upload"
                      type="file"
                      multiple
                      onChange={handleImgUpload}
                      style={{ display: "none" }}
                    />
                  </div>
                  {images.length === 0 && (
                    <button type="button" className="submit_btnImg">
                      UPLOAD IMAGE
                    </button>
                  )}
                  {errorMess && <p style={{ color: "red" }}>{errorMess}</p>}
                  {images.length > 0 && (
                    <div>
                      <h3 className="mt-4">Uploading - {images.length}/4 Files</h3>
                      {images.map((image, index) => (
                        <div key={index} style={{ marginBottom: "10px" }}>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                            className="upload-imge"
                          >
                            <p style={{ marginRight: "10px" }}>{image.name}</p>
                            <div
                              style={{
                                flexGrow: 1,
                                height: "5px",
                                backgroundColor: "#000",
                                marginRight: "10px",
                              }}
                            >
                              <div
                                style={{
                                  height: "5px",
                                  backgroundColor: "#000",
                                  width: `${100}%`,
                                }}
                              ></div>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleDeleteImage(index)}
                            >
                              ❌
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <p>*Upload minimum 4 Images</p>
                  <input
                    type="submit"
                    className="submit_btn"
                    value="Save & Next"
                  />
                </div>
                <div className="sidebar">
                  <div className="steps">
                    <div className="line"></div>
                    <div className="step active">
                      <span>
                        <i className="bx bx-check"></i>
                      </span>{" "}
                      Description
                    </div>
                    <div className="step active">
                      <span>
                        <i className="bx bx-check"></i>
                      </span>{" "}
                      Price
                    </div>
                    <div className="step active">
                      <span>3</span> Images
                    </div>
                    <div className="step">
                      <span>4</span> Details
                    </div>
                    <div className="step">
                      <span>5</span> Location
                    </div>
                    <div className="step">
                      <span>6</span> Calendar
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ListingImage;
