const BodyCornerRings = () => {
  const colors = [
    "#0c4a6e",
    "#083344",
    "#082f49",
    "#0c4a6e",
    "#083344",
    "#082f49",
    "#0c4a6e",
    "#083344",
    "#082f49",
    "#0c4a6e",
    "#083344",
    "#082f49",
    "#0c4a6e",
    "#083344",
    "#082f49",
    "#0c4a6e",
    "#083344",
    "#082f49",
  ];

  return (
    <>

      {/* Top Right */}
      <svg
        className="fixed -z-10 right-[-270px] top-[60px]  pointer-events-none"
        width="500"
        height="400"
        viewBox="0 0 200 200"
        fill="none"
        style={{ opacity: 0.1 }}
      >
        {colors.map((color, index) => (
          <circle
            key={index}
            cx="100"
            cy="100"
            r={110 - index * 6}
            stroke={color}
            strokeWidth="1"
            fill="none"
          />
        ))}
      </svg>
    </>
  );
};

export default BodyCornerRings;
