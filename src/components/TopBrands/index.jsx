import { useRef, useState } from "preact/hooks";
import Collapsable from "../common/Collapsable";
import ContentProducts from "./components/Content";

const TopBrands = () => {
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
        id="top-brands"
        title="Top 3 marcas más populares"
        icon="/assets/brands-icon.svg"
        className={"desktop-container text-base md:text-lg"}
        opened={opened}
        onToggle={() => {
          setOpened((state) => {
            const newStatus = !state.opened

            if(contentRef.current){
              contentRef.current.style.height = newStatus ? `${state.height}px` : `0px`
            }

            return { ...state, opened: newStatus }
          })

          setTimeout(() => {
            document.querySelector("#top-brands").scrollIntoView({
              behavior: "smooth",
              block: "center", 
              inline: "nearest"
            })
          }, 250)
        }}
      />
      <div id="top-brands-content" ref={contentRef} className={"overflow-hidden transition-all duration-200"}>
        <ContentProducts onLoad={loadContent} />
      </div>
    </>
  );
};

export default TopBrands;
