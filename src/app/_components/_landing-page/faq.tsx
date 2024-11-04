import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import BoxReveal from '@/components/ui/box-reveal';

const Faq = () => {
  return (
    <section className='w-full bg-white py-28'>
      <div className='container'>
        <div className='max-w-7xl mx-auto'>
          <BoxReveal>
            <h1 className='px-6 border-l-4 border-primary-green'>
              <span>Frequently Asked </span>
              <span className='text-primary-green'>Questions</span>
            </h1>
          </BoxReveal>

          <Accordion type='single' collapsible className='w-full mt-16'>
            <AccordionItem className='border-t' value='Question-1'>
              <AccordionTrigger className='py-8'>
                <div className='flex h3 font-medium text-left items-center gap-4'>
                  <span className='text-primary-green decoration-primary-green'>
                    01
                  </span>
                  <span>
                    What is FollowUp?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  FollowUp is more than just a platform—it's your personal gateway to a healthier,
                  more balanced life. As a comprehensive virtual wellness center, FollowUp connects
                  you with a wide array of dedicated wellness providers and supporters who are ready
                  to guide you on your journey to becoming your best self. Whether you’re looking to
                  overcome challenges or seeking growth across the dimensions of wellness, we’re here to help you every step of the way.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='Question-2'>
              <AccordionTrigger className='py-8'>
                <div className='flex h3 font-medium text-left items-center gap-4'>
                  <span className='text-primary-green decoration-primary-green'>
                    02
                  </span>
                  <span>
                    Who can use FollowUp?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  FollowUp is designed for everyone who is ready to take charge of their well-being.
                  Whether you're striving to enhance your personal life, elevate your professional journey,
                  or simply find greater balance, our platform is open to all. You have the freedom to join as
                  either a Wellness Provider or a Wellness Supporter, depending on your needs and goals.
                </p>
                <br />
                <p>
                  If you're a Wellness Provider with a passion for uplifting others, we invite you to join our community.
                  As a provider on FollowUp, you’ll enjoy the flexibility to offer your services on your terms—set your own hours,
                  conduct sessions at your convenience, and receive compensation that reflects your expertise and dedication.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='Question-3'>
              <AccordionTrigger className='py-8'>
                <div className='flex h3 font-medium text-left items-center gap-4'>
                  <span className='text-primary-green decoration-primary-green'>
                    03
                  </span>
                  <span>
                    How does FollowUp work?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  We’ve made FollowUp simple, intuitive, and tailored to your needs.
                </p>
                <br />
                <p>
                  For Wellness Supporters: Enjoy free access to a wealth of resources that empower you to take control
                  of your wellness journey. Create personalized action plans, connect with experienced wellness professionals,
                  and monitor your progress as you build habits that lead to a healthier, more fulfilling life.
                  FollowUp is like having a personal coach at your fingertips, guiding you to break through obstacles and realize
                  your full potential—all in a way that fits seamlessly into your life.
                </p>
                <br />
                <p>
                  For Wellness Providers: Join a dynamic platform that not only broadens your reach
                  but also enhances the way you connect with clients. Our user-friendly interface allows
                  you to offer holistic care, making a meaningful impact on your clients' lives.
                  With FollowUp, you’re in control—conduct sessions on your schedule, set your own rates,
                  and grow your practice in a way that aligns with your values and lifestyle.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='Question-4'>
              <AccordionTrigger className='py-8'>
                <div className='flex h3 font-medium text-left items-center gap-4'>
                  <span className='text-primary-green decoration-primary-green'>
                    04
                  </span>
                  <span>
                    What are the benefits of using FollowUp?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className='underline'>For Wellness Supporters:</p>
                <br />
                <ul>
                  <li className='list-disc'>
                    <span className='font-bold text-[#000]'>Comprehensive Well-Being:</span> Dive deep into all eight dimensions of wellness—physical,
                    emotional, social, intellectual, vocational, environmental, spiritual, and financial.
                    Experience the transformative power of addressing every aspect of your life, leading to true balance and fulfillment.
                  </li>
                </ul>
                <br />
                <ul>
                  <li>
                    <span className='font-bold text-[#000]'>Tailored Support:</span> Your journey is unique, and so is our approach.
                    FollowUp offers personalized guidance that adapts to your individual needs, helping you achieve
                    your goals in a way that resonates with you.
                  </li>
                </ul>
                <br />
                <ul>
                  <li>
                    <span className='font-bold text-[#000]'>On-Demand Access:</span> Say goodbye to the barriers that once s
                    tood between you and the support you needed. With FollowUp,
                    help is always within reach—whether from the comfort of your home or wherever life takes you.
                  </li>
                </ul>
                <br />
                <ul>
                  <li>
                    <span className='font-bold text-[#000]'>Empowerment Through Knowledge:</span> Gain the insights, tools,
                    and confidence to create lasting change. Our platform not only supports
                    your growth but also equips you with the knowledge to thrive in every aspect of your life.
                  </li>
                </ul>
                <br />
                <p className='underline'>For Wellness Providers:</p>
                <br />
                <ul>
                  <li>
                    <span className='font-bold text-[#000]'>Expand Your Practice:</span> Tap into a diverse client base eager for support
                    in all areas of wellness. FollowUp connects you with clients who might
                    otherwise be out of reach, helping you grow your practice and make a greater impact.
                  </li>
                </ul>
                <br />
                <ul>
                  <li>
                    <span className='font-bold text-[#000]'>Holistic Approach:</span> Leverage our platform to offer comprehensive,
                    multi-dimensional care that addresses every
                    facet of well-being. Become a trusted partner in your clients' journeys to wellness.
                  </li>
                </ul>
                <br />
                <ul>
                  <li>
                    <span className='font-bold text-[#000]'>Flexibility and Freedom:</span> Enjoy the autonomy to work on your terms.
                    Set your own hours,
                    choose your rates, and create a practice that aligns perfectly with your life.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className='border-t' value='Question-5'>
              <AccordionTrigger className='py-8'>
                <div className='flex h3 font-medium text-left items-center gap-4'>
                  <span className='text-primary-green decoration-primary-green'>
                    05
                  </span>
                  <span>
                    Do I need insurance to use FollowUp?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  No insurance? No problem! You don’t need insurance to access support through FollowUp.
                  While some Wellness Providers may accept insurance, our mission is to offer you affordable wellness solutions,
                  regardless of your financial situation. We’re committed to making sure everyone has access to the support
                  they need to thrive.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className='border-t' value='Question-6'>
              <AccordionTrigger className='py-8'>
                <div className='flex h3 font-medium text-left items-center gap-4'>
                  <span className='text-primary-green decoration-primary-green'>
                    06
                  </span>
                  <span>
                    Is there a verification process?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Absolutely. We take your well-being seriously, which is why all Wellness Providers must verify their
                  qualifications before joining our platform. This involves submitting proof of registration and relevant licenses,
                  ensuring that you’re connecting with highly qualified professionals. The specific requirements depend on the
                  provider's professional body (e.g., College of Social Work, College of Physiotherapists, Bar Association for Lawyers).
                </p>
                <br />
                <p>
                  Wellness Providers that are enrolled in a secondary or post- secondary institution must provide
                  proof of enrollment to receive the 50% discount.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* <h1 className='text-[18px] font-bold mt-[30px]'>Join Us As Wellness Supporters/ Wellness Providers</h1> */}
          {/* <p className='text-[17px] mt-[18px]'>Unlock a world of boundless opportunities. Sign up to started now! </p> */}
        </div>
      </div>
    </section>
  );
};

export default Faq;
