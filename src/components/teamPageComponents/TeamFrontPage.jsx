function TeamFrontPage() {
	return (
		<div
			id="frontPage"
			className='bg-black flex items-center justify-center min-w-[48rem] text-[#ACB8CB] font-["Roboto"] text-center mt-80 mb-72'
		>
			<div className="title opacity-0 flex flex-col items-center justify-center gap-y-6 min-w-[48rem] max-w-full">
				<div className="font-semibold text-2xl">ISTE</div>
				<div className="text-[#6C90C2] text-5xl font-bold">
					Emphasize what&apos;s important to your company.
				</div>
				<div className="font-normal text-lg">
					A place to learn, to thrive, to grow
				</div>
			</div>
		</div>
	);
}

export default TeamFrontPage;
