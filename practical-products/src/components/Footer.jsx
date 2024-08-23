function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div
      style={{
        padding: "16px",
        textAlign: "center",
        backgroundColor: "#3B82F6",
      }}
    >
      <p>Practical Products. All Rights Reserved. { currentYear }.</p>
    </div>
  );
}

export default Footer;
