import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./Home";
import MotorComponent from "./Pages/Motor";
import CaravanComponent from "./Pages/Caravan";
import TuningComponent from "./Pages/Tuning";
import UsedCarComponent from "./Pages/UsedCar";
import CampingPlaceComponent from "./Pages/CampingPlace";
import DetailedPage from "./Pages/DetailedPages/DetailedPage";
import AccordionExpandIcon from "./Pages/acardion";
import SignInComp from "./Pages/signIn";
import RegisterComp from "./Pages/register";
import CampingDetailedPage from "./Pages/CampingDetailedPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/motor" element={<MotorComponent />} />
        <Route path="/caravan" element={<CaravanComponent />} />
        <Route path="/tuning" element={<TuningComponent />} />
        <Route path="/usedcar" element={<UsedCarComponent />} />
        <Route path="/campingplace" element={<CampingPlaceComponent />} />
        <Route path="/motor/:id" element={<DetailedPage />} />
        <Route path="/acardion" element={<AccordionExpandIcon />} />
        <Route path="/signin" element={<SignInComp />} />
        <Route path="/register" element={<RegisterComp />} />
        <Route path="campingplace/:id" element={<CampingDetailedPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
