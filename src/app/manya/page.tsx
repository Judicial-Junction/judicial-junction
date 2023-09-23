import Image from 'next/image';

function Manya() {
	return (
		<div className="bg-[#F2EAD3] py-3 mt-[200px]">
			<div className="grid grid-cols-5 gap-10">
				<div className="bg-white px-4 py-4 rounded-lg flex flex-col col-span-1">
					<Image
						src="https://picsum.photos/800/600?random=1"
						alt="random"
						className="rounded-lg"
						width="100"
                        height='100'
					/>
					<div className="py-4 flex flex-col items-start">
						<p className="text-black align-middle items-center font-serif">
							I will build your professional website for 1 crore
							only hehe
						</p>
						<br />
						<button className="bg-[#3F2305] font-serif text-left py-2 px-3 w-[120px] rounded-lg border-white border-4 hover:bg-[#DFD7BF] hover:border-[#3F2305] hover:text-[#3F2305]">
							Hire me
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Manya;
