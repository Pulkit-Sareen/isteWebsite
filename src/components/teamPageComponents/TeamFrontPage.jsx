function TeamFrontPage() {
	return (
		<div
			id="frontPage"
			className='bg-black flex items-center justify-center text-[#ACB8CB] font-["Roboto"] text-center mt-20 mb-20 px-4 sm:px-8 lg:px-16'
		>
			<div className="title opacity-0 flex flex-col items-center justify-center gap-y-6 w-full max-w-[48rem]">
				<div className="font-semibold text-xl sm:text-2xl">ISTE</div>
				<div className="text-[#6C90C2] text-3xl sm:text-4xl md:text-5xl font-bold">
					A place to learn, to thrive, to grow
				</div>
				<div className="font-normal text-base sm:text-lg">
				The strength of the team is each individual member.
				The strength of each member is the team.&quot; Our dedicated team of enthusiastic learners is committed to advancing our society’s goals. 
				Each member brings unique skills and expertise, working together to positively impact the tech community.
				</div>
			</div>
		</div>
	);
}

export default TeamFrontPage;
