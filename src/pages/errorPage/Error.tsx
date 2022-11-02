import error404 from "./error404.png";
export default function Error() {
	return (
		<div className="bg-[#d0d7de] opacity-[0.5] w-full h-[100vh]">
			<div className="flex items-center justify-center">
				<img src={error404} />
			</div>
		</div>
	);
}
