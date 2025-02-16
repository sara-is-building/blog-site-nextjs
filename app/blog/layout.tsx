import BlogWithDataTypes from "../components/blog/blogComponent";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    
    <div className=" flex flex-row shrink">     
      <BlogWithDataTypes/>
      <div className="fle order-2">{children}</div>
      {/* <BlogCategories/> */}
    </div>
  );
}