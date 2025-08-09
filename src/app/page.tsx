import SignUpForm from '@/components/form/SignUpForm';

const page = () => {
  return (
      <div className='bg-slate-200 p-10 rounded-md'>
        <div className='w-full'>
          <SignUpForm />
        </div>
      </div>
  );
};

export default page;