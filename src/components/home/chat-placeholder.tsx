// import { Lock } from "lucide-react";
// import Image from "next/image";
// import { Button } from "../ui/button";

// const ChatPlaceHolder = () => {
// 	return (
// 		<div className='w-3/4 bg-gray-secondary flex flex-col items-center justify-center py-10'>
// 			<div className='flex flex-col items-center w-full justify-center py-10 gap-4'>
// 				<Image src={"/poopenai.png"} alt='Hero' width={320} height={188} />
// 				<p className='text-3xl font-extralight mt-5 mb-2'>Download Wave for Windows</p>
// 				<p className='w-1/2 text-center text-gray-primary text-sm text-muted-foreground'>
// 					Make calls, share your screen and get a faster experience when you download the Windows app.
// 				</p>

// 				<Button className='rounded-full my-5 bg-green-primary hover:bg-green-secondary'>
// 					Get from official website
// 				</Button>
// 			</div>
// 			<p className='w-1/2 mt-auto text-center text-gray-primary text-xs text-muted-foreground flex items-center justify-center gap-1'>
// 				<Lock size={10} /> Your personal messages are end-to-end encrypted
// 			</p>
// 		</div>
// 	);
// };

import { AudioWaveform } from "lucide-react";

const ChatPlaceHolder: React.FC = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
             justify-center animate-bounce"
            >
              <AudioWaveform className="w-8 h-8 text-primary " />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold">Welcome to Wave!</h2>
        <p className="text-base-content/60">
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
};
export default ChatPlaceHolder;