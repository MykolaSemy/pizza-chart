import { Chart as AntChart } from "@antv/g2";
import { useEffect } from "react";
import { useGetData } from "../hooks/useGetData";

interface ChartProps {}

const Chart: React.FC<ChartProps> = () => {
  const { data, errors, isLoading } = useGetData(0, 100);

  const containerRef = document.getElementById("container");

  useEffect(() => {
    if (data?.products.length) {
      const chart = new AntChart({
        container: "container",
        autoFit: false,
      });

      chart.coordinate({ type: "polar" });

      chart
        .scale("color", { type: "ordinal", range: ["#ca8861", "#675193"] })
        .axis("x", {
          labelAlign: "parallel",
          labelDirection: "positive",
          labelSpacing: 10,
          labelTransforms: [{ type: "hide" }],
          lineLineWidth: 5,
          lineStroke: "#000000",
          showGrid: true,
        })
        .point()
        .data(data.products)
        .transform({ type: "jitter" })
        .encode("x", "price")
        .encode("color", "price")
        .legend(false);
      chart.render();
    }
  }, [containerRef, data]);

  return <div id="container" className="m-auto"></div>;
};

export default Chart;
