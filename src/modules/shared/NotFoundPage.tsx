export const NotFoundPage = () => {
  const myStyle: {} = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  };

  return (
    <>
      <div style={myStyle}>
        <h1>Page is not found</h1>
        <img
          src="public/img/product-not-found.png"
          alt=""
          style={{ width: '500px', height: '500px' }}
        />
      </div>
    </>
  );
};
