type Props = {
  name?: string;
  onClick?:()=>void
} ;

//引入icon下的所有svg
const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

export default function Icon(props: Props) {
  let { name, onClick } = props;

  return (
    <svg className="icon" onClick={onClick}>
      {props.name && <use xlinkHref={name} />}
    </svg>
  );
}
