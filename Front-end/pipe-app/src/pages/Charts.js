import Chart from "../components/Chart";

export default function Charts(props){
    return (
      <>
        <div className=" px-28">
          <Chart chart_name="TOPPAID" heading="Top paid" />
          <Chart chart_name="TOPFREE" heading="Top free" />
          <Chart chart_name="TOPDOWNLOAD" heading="Top download" />
          <Chart chart_name="TOPRATING" heading="Top rating" />
        </div>
      </>
    );
}