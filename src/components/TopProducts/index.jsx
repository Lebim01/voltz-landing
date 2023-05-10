import { useRef, useState } from "preact/hooks";
import Collapsable from "../common/Collapsable";
import ContentProducts from "./components/Content";
import { classNames } from "@/utils/classes";

const TopProducts = () => {
  const contentRef = useRef(null)
  const [opened, setOpened] = useState({
    height: 0,
    opened: true
  });

  const loadContent = () => {
    const height = contentRef.current.scrollHeight
    setOpened(state => ({
      ...state,
      height
    }))
  }

  return (
    <>
      <Collapsable
        id="top-products"
        title="Top 5 productos más cotizados"
        icon="/assets/products-icon.svg"
        opened={opened.opened}
        className={"desktop-container text-base md:text-lg text-text-primary"}
        onToggle={() => {
          setOpened((state) => {
            const newStatus = !state.opened

            if(contentRef.current){
              contentRef.current.style.height = newStatus ? `${state.height}px` : `0px`
            }

            return { ...state, opened: newStatus }
          })

          setTimeout(() => {
            document.querySelector("#top-products").scrollIntoView({
              behavior: "smooth",
              block: "center", 
              inline: "nearest"
            })
          }, 250)
        }}
      />
      <div id="top-products-content" ref={contentRef} className={"overflow-hidden transition-all duration-200"}>
        <ContentProducts onLoad={loadContent} />
      </div>
    </>
  );
};

export default TopProducts;
