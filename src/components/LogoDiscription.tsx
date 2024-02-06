import styles from './LogoDiscription.module.css'
import { ReactSVG } from "react-svg";

export function LogoDiscription() {
  return (
    <div className={styles.logo_description}>
      <ReactSVG
          src="./hidi.svg"
          beforeInjection={(svg) => {
            svg.querySelectorAll('path').forEach((path) => {
              path.setAttribute('stroke', '#bcbcbc');
            });
          }}
        />


        <h1>hiyu-dict</h1>
        <p className="app-description">
          自分だけの比喩辞典で文豪並みの引き出しを作ろう
        </p>
    </div>
  )
}

