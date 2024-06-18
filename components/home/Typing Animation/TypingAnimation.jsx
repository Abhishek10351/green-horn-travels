"use client";

import React, { useEffect } from "react";
import anime from "animejs";
import "./TypingAnimation.css";

function TypingAnimation() {
  useEffect(function () {
    if (typeof window !== "undefined") {
      var textWrapper = document.querySelector(".ml11 .letters");
      if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent.replace(
          /([^\x00-\x80]|\w)/g,
          "<span class='letter'>$&</span>"
        );

        anime
          .timeline({ loop: true })
          .add({
            targets: ".ml11 .line",
            scaleY: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 100,
          })
          .add({
            targets: ".ml11 .line",
            translateX: [0, textWrapper.getBoundingClientRect().width + 10],
            easing: "easeOutExpo",
            duration: 900,
            delay: 100,
          })
          .add({
            targets: ".ml11 .letter",
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 600,
            offset: "-=775",
            delay: function (el, i) {
              return 64 * (i + 1);
            },
          })
          .add({
            targets: ".ml11",
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 2000,
          });
      }
    }
  }, []);

  return (
    <h1 className="ml11 animation">
      <span className="text-wrapper">
        <span className="line line1"></span>
        <span className="letters">Your one stop travel solution</span>
      </span>
    </h1>
  );
}

export default TypingAnimation;
