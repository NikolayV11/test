import React from "react";
import { HandySvg } from "handy-svg";

import styles from "./PublicPost.module.scss";
import { MediaSelector } from "./MediaSelector";
import { MyApp } from "./Calendar/Calendar";
import { PublicationForUsers } from "./postVisibility/index";
import { PostEditing } from "./PostEditing";
export function PublicPost() {
  const [activeInput, setActiveInput] = React.useState(false);
  const [valueTextarea, setValueTextarea] = React.useState("");
  const postStory = React.useRef();
  const infoValueTextarea = React.useRef();
  const [valueData, onChangeData] = React.useState(new Date());
  const [openCal, setOpenCal] = React.useState(false);
  const [openList, setOpenList] = React.useState(false);

  React.useEffect(() => {
    const activeInput = (event) => {
      if (!event.composedPath().includes(postStory.current)) {
        console.log(infoValueTextarea.current.value);
        if (infoValueTextarea.current.value === "") {
          setActiveInput(false);
        }
      }
    };

    document.body.addEventListener("click", activeInput);

    return () => {
      document.body.removeEventListener("click", activeInput);
    };
  }, []);

  return (
    <>
      <div ref={postStory} className={`${styles.box_post} boxBorder`}>
        <label className={styles.post} id="inputPost">
          <div className={`${styles.inputPost} ${activeInput && styles.inputPostActive}`}>
            <img src="/public/ico/headerNav/foto.jpg" alt="" />
            <textarea
              ref={infoValueTextarea}
              onClick={() => {
                setActiveInput(true);
              }}
              onChange={(event) => {
                setValueTextarea(event.target.value);
              }}
              value={valueTextarea}
              maxlength="150"
              placeholder="Что у вас нового?"></textarea>
          </div>

          <div className={styles.nav}>
            {activeInput ? (
              <div>
                <button className="PublicPost_Btn">
                  <HandySvg src="/public/ico/box_post/em.svg" className="PublicPost_SVG" />
                </button>
              </div>
            ) : (
              <>
                <MediaSelector />
                <div className={`${styles.sep} sep`}></div>
                <button className="PublicPost_Btn">
                  <HandySvg
                    className="PublicPost_SVG"
                    src="/public/ico/box_post/BestFriendsSettingsEntrypoint__layout.svg"
                  />
                </button>
              </>
            )}
          </div>
        </label>
        {activeInput && (
          <div className={styles.post_actions_btns}>
            <div className={`${styles.sepActive} sep`}></div>
            <div className={styles.postVisibility}>
              <div className={styles.publicationFor}>
                <PublicationForUsers
                  openList={openList}
                  setOpenList={setOpenList}
                  setOpenCal={setOpenCal}
                />
              </div>
              <div className={styles.calen}>
                <button
                  className={styles.calen_btn}
                  onClick={() => {
                    setOpenCal(!openCal);
                    setOpenList(false);
                  }}>
                  <span>{valueData.toLocaleDateString()}</span>
                </button>
                {openCal && (
                  <div className={styles.calen_calendar}>
                    <MyApp value={valueData} onChange={onChangeData} className={` boxBorder`} />
                  </div>
                )}
              </div>
            </div>
            <div className="sep" style={{ borderTop: "none" }}></div>

            <PostEditing />
          </div>
        )}
      </div>
    </>
  );
}
