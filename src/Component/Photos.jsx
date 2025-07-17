import React from "react";

const images = [
    
    { src:require("../assets/images/TOKR9740.jpg"), alt: "Image 1", className: "col-span-2 row-span-2 imgheightclass" },
    
    { src:require("../assets/images/1V9A8666.jpg"), alt: "Image 2", className:"smallimage"},
    { src: require("../assets/images/TOKR9718.jpg"), alt: "Image 5" , className:"smallimage"},
    // { src: require("../assets/images/ANG_7088.jpg"), alt: "Image 4" , className:"smallimage"},
    // { src: require("../assets/images/TOKR9740.jpg"), alt: "Image 6", className: "row-span-2  col-span-2 imgheightclass" },
    { src: require("../assets/images/ANG_7087.jpg"), alt: "Image 9" , className:"row-span-2  col-span-1 imgheightclass"},
    // { src:require("../assets/images/1V9A6927.jpg"), alt: "Image 8" , className:"smallimage"},
    // { src: require("../assets/images/1V9A8734.jpg"), alt: "Image 3", className:"row-span-2  col-span-1 imgheightclass" },
    { src: require("../assets/images/1B7A7946.378929ba45b5c67994df.jpg"), alt: "Image 7", className: "col-span-2 row-span-2 imgheightclass" },
];

const Photos = () => {
    return (
        <>
            <div className="darkviolet py-5 photos_bg">
                <div className="container">                
             

                    <div className="containerimg mx-auto">
                        {images.map((image, index) => (
                            <div key={index} className={`image-box text-white my-3 my-md-0  ${image.className || ""}`}>
                                <img src={image.src} alt={image.alt} className="img-fluid  object-fit-cover" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
};

export default Photos;
