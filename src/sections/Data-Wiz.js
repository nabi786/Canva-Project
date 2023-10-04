import MdPhotoLibrary from "@meronex/icons/md/MdPhotoLibrary";
import React from "react";
import { observer } from "mobx-react-lite";
import { InputGroup } from "@blueprintjs/core";
import { ImagesGrid } from "polotno/side-panel/images-grid";
import { getImageSize } from "polotno/utils/image";
import { SectionTab } from "polotno/side-panel";
import GrMagic from "@meronex/icons/gr/GrMagic";
import img from "../imgs/img1.svg";

export const PhotosPanel = observer(({ store }) => {
  const [images, setImages] = React.useState([]);
  const [aboutELm, set_aboutelm] = React.useState([]);

  async function loadImages() {
    // here we should implement your own API requests
    setImages([]);
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // for demo images are hard coded
    // in real app here will be something like JSON structure
    setImages([
      { url: "https://5.imimg.com/data5/LP/FA/MY-50363679/computer-world-500x500.jpg", d_name: "www_ss_desktop" },
    ]);
    set_aboutelm([
      { url: img, d_name: "company_phone" },
      { url: img, d_name: "company_Introduction" },
      { url: img, d_name: "company_title" },
    ]);
  }

  React.useEffect(() => {
    loadImages();
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>About:</p>
        <ImagesGrid
          images={aboutELm}
          getPreview={(elm) => elm.url}
          onSelect={async (elm, pos) => {
            const { width, height } = await getImageSize(elm.url);
            store.activePage.addElement({
              type: "text",
              x: 0,
              y: 0,
              rotation: 0,
              locked: false, // deprecated
              blurEnabled: false,
              blurRadius: 10,
              brightnessEnabled: false,
              brightness: 0,
              shadowEnabled: false,
              shadowBlur: 5,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: "black",
              shadowOpacity: 1,
              name: `${elm.d_name}`,
              text: `${elm.d_name}`,
            });
          }}
          rowsNumber={5}
          isLoading={!aboutELm.length}
          loadMore={false}
        />

        <p style={{marginTop : "10px"}}>Images:</p>
        <ImagesGrid
              images={images}
              getPreview={(image) => image.url}
              onSelect={async (image, pos) => {
                const { width, height } = await getImageSize(image.url);
                store.activePage.addElement({
                  type: "image",
                  src: image.url,
                  width,
                  height,
                  // if position is available, show image on dropped place
                  // or just show it in the center
                  x: pos ? pos.x : store.width / 2 - width / 2,
                  y: pos ? pos.y : store.height / 2 - height / 2,
                  name: `${image.d_name}`,
                });
              }}
              rowsNumber={3}
              isLoading={!images.length}
              loadMore={false}
            />


      {/* <ImagesGrid
          images={images}
          getPreview={(image) => image.url}
          onSelect={async (image, pos) => {
            const { width, height } = await getImageSize(image.url);
            store.activePage.addElement({
              type: image,
              x: 0,
              y: 0,
              rotation: 0,
              locked: false, // deprecated
              blurEnabled: false,
              blurRadius: 10,
              brightnessEnabled: false,
              brightness: 0,
              shadowEnabled: false,
              shadowBlur: 5,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: "black",
              shadowOpacity: 1,
              name: `${image.text}`,
              text: `${image.text}`,
            });
          }}
          rowsNumber={5}
          isLoading={!images.length}
          loadMore={false}
        /> */}
        {/* <ImagesGrid
          images={images}
          getPreview={(image) => image.url}
          onSelect={async (image, pos) => {
            const { width, height } = await getImageSize(image.url);
            store.activePage.addElement({
              type: "text",
              x: 0,
              y: 0,
              rotation: 0,
              locked: false, // deprecated
              blurEnabled: false,
              blurRadius: 10,
              brightnessEnabled: false,
              brightness: 0,
              shadowEnabled: false,
              shadowBlur: 5,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: "black",
              shadowOpacity: 1,
              name: "company_title",
              text: `${image.text}`,
            });
          }}
          rowsNumber={5}
          isLoading={!images.length}
          loadMore={false}
        /> */}
        {/* <ImagesGrid
          images={images}
          getPreview={(image) => image.url}
          onSelect={async (image, pos) => {
            const { width, height } = await getImageSize(image.url);
            store.activePage.addElement({
              type: "text",
              x: 0,
              y: 0,
              rotation: 0,
              locked: false, // deprecated
              blurEnabled: false,
              blurRadius: 10,
              brightnessEnabled: false,
              brightness: 0,
              shadowEnabled: false,
              shadowBlur: 5,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: "black",
              shadowOpacity: 1,
              name: "Company_Introduction",
              text: `${image.text}`,
            });
          }}
          rowsNumber={5}
          isLoading={!images.length}
          loadMore={false}
        /> */}

        {/* seo and domain overview */}
        <p style={{ marginTop: "10px" }}>SEO - Domain Overview</p>
       

        {/* SEO Detials */}
        <p style={{ marginTop: "10px" }}>SEO Detials</p>
        

        {/* WWW Performances */}
        
      </div>

      {/* seo domain overview*/}
    </>
  );
});

export const DataWiz = {
  name: "Data Wiz",
  Tab: (props) => (
    <SectionTab name="Data Wiz" {...props}>
      <GrMagic />
    </SectionTab>
  ),
  // we need observer to update component automatically on any store changes
  Panel: PhotosPanel,
};
