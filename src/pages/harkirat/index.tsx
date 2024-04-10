import withLoggedInOnly from "../../middlewares/withLoggedInOnly";

const HarkiraPage = () => {
  return (
    <div>
      <h1>Harkira Page</h1>
    </div>
  );
};

export default withLoggedInOnly(HarkiraPage);
