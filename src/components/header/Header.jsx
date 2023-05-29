import { ReactComponent as Line } from "../../icons/Line.svg";
import './header.css';

function Header()
{
    return (
        <div class ="top">
            <div id = "title">
              <p >Zac Poonen</p>
              <p >ANSWERS</p>
              <Line id = "line"/>
              <p class = "p-desc">Listen to Zac Poonen’s answers to over 600 questions, which is a treasure house of wisdom.</p>
            </div>
            <img src = "https://www.cfcindia.com/resources/en/images/app/br-zac-right-card.png" alt = "main-img"/>
      </div>
    );
}

export default Header;