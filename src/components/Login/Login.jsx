const Login = () => {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <div>
      <button onClick={handleClick}> Login with Google</button>
    </div>
  );
};

export default Login;
