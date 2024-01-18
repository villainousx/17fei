import VipIsland from "../islands/vip.tsx";
import { useEffect } from "preact/hooks";

 
const RedirectComponent = () => {
  // 在组件加载时执行跳转操作
  useEffect(() => {
    window.location.href = '/'; // 设置新页面的 URL
  }, []);
  
  return null; // 不需要显示任何内容，因此直接返回空元素
};
 
export default RedirectComponent;
