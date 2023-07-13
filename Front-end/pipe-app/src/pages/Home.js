import Banner from "../components/Banner";
import Categorymain from "../components/CategoryMain";
import MainChart from "../components/MainChart";
import MonthChart from "../components/MonthChart";
import SaleBanner from "../components/SaleBanner";
import WeekChart from "../components/WeekChart";

export default function Home(props) {
  return (
    <>
      <div className="text-white m-5 mt-4 grid grid-cols-8">
        <div className=" col-span-6">
          <div className=" h-40 grid grid-cols-3 gap-2">
            <div>
              <Banner />
            </div>

            <div>
              <Banner />
            </div>

            <div>
              <Banner />
            </div>
          </div>

          <MainChart namechart="PIPES recommendation" />

          <MainChart namechart="PIPES YOLO" />

          <SaleBanner />

          <Categorymain />

          <MainChart namechart="Your mom loves these games" />

          <MainChart namechart="Let's chill with PIPES"/>
        </div>

        <div className=" col-span-2 px-5">
          <WeekChart />
          <MonthChart />
        </div>
      </div>
    </>
  );
}
