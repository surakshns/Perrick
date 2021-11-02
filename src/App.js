import Banner from "./component/Banner";

function App() {
  return (
      <div>
        <Banner />
        <div style={{alignItems:'center',display:'flex',justifyContent:'center'}}>
          <p style={{color:'white',fontSize:'12px',position:'fixed',bottom:'10px'}}>Website Developed by&nbsp;<a href="https://surakshns.github.io/surakshns/#/" style={{color:'white'}}>suraksh.in</a></p>
        </div>
      </div>
  );
}

export default App;
