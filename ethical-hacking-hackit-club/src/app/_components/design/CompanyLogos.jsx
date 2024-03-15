import { companyLogos } from '../../constants';
import Image from 'next/image';

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="p-2 mb-6 text-center tagline text-n-1/50">
        In the world of cybersecurity, every click counts. Stay vigilant, stay secure
      </h5>
      <ul className="flex">
        {companyLogos.map((item, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <div className='flex flex-col items-center justify-center m-2'>
            <Image src={item.url} width={134} height={28} alt={item.url} />
            <span className='p-2 font-bold'>{item.title}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
