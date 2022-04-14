type Props = {
  name?: string;
};


//引入icon下的所有svg
const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}


export default function Icon(props: Props) {

  return (
    <svg className="icon">
      <use xlinkHref={props.name} />
    </svg>
  );
}
