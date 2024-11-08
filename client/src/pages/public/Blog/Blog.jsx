import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "~/components/layout/Public/Layout";
import { pagesApi } from "~/apis/pagesApi";
import { Result, Spin } from "antd";
import { toastSuccess } from "~/components/toast";
import { contactApi } from "~/apis/contact";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Html = () => {
  const { "*": path } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const { info } = useSelector((state) => state.info);

  useEffect(() => {
    setLoading(true);
    const fetchPage = async () => {
      try {
        const pageData = await pagesApi.sig(
          window.location.pathname === "/" ? "trang-chu" : path,
          "page"
        );
        setPage(pageData);
        setLoading(false);
        window.scrollTo(0, 0);
      } catch {
        // navigate("/404");
      }
    };
    fetchPage();
  }, [path, navigate]);

  const handleFormSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const form = event.target;
      const data = new FormData(form);

      const jsonObject = {};
      data.forEach((value, key) => {
        jsonObject[key] = value;
      });

      jsonObject["_id"] = uuidv4();

      contactApi
        .put({ filename: page?.name, data: jsonObject })
        .then(() => {
          toastSuccess(
            "sendData",
            "Cảm Ơn Bạn Đã Gửi Thông Tin!",
            "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất!"
          );
        })
        .catch(() => {
          toastSuccess("sendData", "Có Lỗi Xảy Ra!", "Vui lòng thử lại sau!");
        });
      form.reset();
    },
    [page]
  );

  useEffect(() => {
    const existingStyle = document.getElementById("dynamic-styles");
    if (existingStyle) existingStyle.remove();
    const existingScript = document.getElementById("dynamic-script");
    if (existingScript) existingScript.remove();

    const styleElement = document.createElement("style");
    styleElement.id = "dynamic-styles";
    styleElement.innerHTML = page?.content?.css;
    document.head.appendChild(styleElement);

    const scriptElement = document.createElement("script");
    scriptElement.id = "dynamic-script";
    scriptElement.innerHTML = page?.content?.js;
    document.body.appendChild(scriptElement);

    const forms = document.querySelectorAll("form");
    forms.forEach((form) => {
      form.addEventListener("submit", handleFormSubmit);
    });

    return () => {
      styleElement.remove();
      scriptElement.remove();
      forms.forEach((form) => {
        form.removeEventListener("submit", handleFormSubmit);
      });
    };
  }, [page, handleFormSubmit]);

  return (
    <Layout
      title={
        page?.name === "Trang Chủ"
          ? info?.newData?.[0]?.name
          : page?.name || info?.newData?.[0]?.name
      }
      description={page?.description || "Chicken War Studio"}
      keywords={page?.keywords || "Chicken War Studio"}
    >
      {/* {loading && <Spin indicator={1} spinning={true} fullscreen />} */}
      {!loading && !page?.content ? (
        <section>
          <Result
            status="403"
            title="Không có dữ liệu!"
            subTitle="Trang chưa được thêm dữ liệu vào trong, vui lòng thêm dữ liệu vào!"
          />
        </section>
      ) : (
        <div
          id="page-content"
          dangerouslySetInnerHTML={{ __html: page?.content?.html }}
        />
      )}
    </Layout>
  );
};

export default Html;
