import moment from 'moment';
import Image from 'next/image';
import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import RecentBlogPostImage from '~/images/recent-blog-post.jpg';

const BlogDetails = () => {
  return (
    <section className='container mt-6'>
      <div className='max-w-7xl mx-auto'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/blog'>Blogs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Blog Details</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <section className='mt-7'>
          <h3 className='text-center'>
            Office ipsum you must be muted. Pin red-flag.
          </h3>

          <p className='text-lg font-semibold text-center mt-4'>
            <span className='text-primary-green'>Demi Wilkinson &bull;</span>{' '}
            {moment().format('DD MMM YYYY')}
          </p>

          <div className='w-full aspect-[2.29] mt-12 relative rounded-xl overflow-hidden'>
            <Image
              src={RecentBlogPostImage}
              alt='Recent Blog Post Image'
              // width={619}
              // height={270}
              className='w-full h-auto object-cover'
              placeholder='blur'
              fill
            />
          </div>

          <p className='pt-10'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
            pariatur? Itaque odio at quis nobis repellat pariatur ipsum commodi
            dicta, laboriosam rerum tempore harum porro perferendis hic minima
            praesentium quisquam! Nostrum officiis, itaque ratione iste,
            laudantium error nisi praesentium corporis omnis esse veniam eos
            sint. Voluptas qui, nesciunt corrupti nemo ea quidem, harum at nam
            vero quibusdam et. Sed, dolor. Quas quidem aspernatur quam impedit
            veniam illum totam doloremque in facilis iusto magnam itaque
            perferendis ea asperiores accusantium eum a quo nulla unde, corrupti
            neque! Obcaecati voluptates officiis beatae nihil. Animi nemo fugiat
            est! Unde assumenda repellendus ullam non repellat fuga quod quidem
            corrupti, perspiciatis aspernatur voluptate iusto quam dolorum
            accusamus sit accusantium. Dolore animi impedit consectetur omnis
            deserunt autem. Minus dolores, facilis ad, quidem, ducimus fuga
            nobis explicabo cum amet nulla unde. Voluptatibus repudiandae
            commodi, odit unde beatae, quo ipsum est cum libero ipsa fugit
            minima illum ipsam quod. Assumenda velit accusantium perferendis
            magnam aliquam facilis ipsa nam. Voluptates, vel alias nulla est
            officiis ab doloremque aliquam cupiditate in quibusdam eveniet
            laboriosam amet. Aliquam quod voluptas in pariatur voluptatibus.
            Adipisci animi eaque nihil dicta! Ut repudiandae quos provident
            quasi, doloremque obcaecati deleniti, molestiae amet at, cumque est
            laboriosam. Illum facilis placeat impedit rem asperiores esse
            aspernatur accusamus, provident voluptates. Alias doloremque commodi
            beatae corrupti laborum ex cumque est, ullam necessitatibus
            temporibus veritatis omnis fugit explicabo soluta ducimus obcaecati
            reprehenderit nostrum blanditiis sint debitis? Inventore ad placeat
            asperiores doloremque reiciendis. Quam officiis, mollitia ducimus
            neque, eos eaque nisi quia dicta cum nesciunt saepe, repudiandae
            laboriosam. Nam enim facilis, harum commodi ipsa, quidem
            consequuntur blanditiis dolore quis sequi neque totam natus! Earum
            autem ut quo a ad, culpa vero laudantium debitis nulla? Unde ipsa
            molestias earum ipsam aspernatur possimus rerum voluptate
            laudantium, autem nulla voluptatum! Ad fugiat nostrum provident
            recusandae iste.
          </p>

          <p className='pt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tenetur
            possimus asperiores adipisci saepe debitis doloremque error nobis!
            Quas eos, nesciunt dignissimos impedit porro ab maxime at blanditiis
            fugit suscipit! Eligendi tenetur architecto, atque hic ipsam dolore
            facilis, maiores nemo dolores vitae voluptate fugiat quis quo!
            Molestiae repellendus expedita accusantium quidem, dignissimos,
            numquam ducimus nobis vitae eveniet at totam porro. Distinctio, quis
            culpa nesciunt iusto perferendis accusamus. Ut sed explicabo fugiat
            repudiandae quis cum vitae quibusdam exercitationem, veniam sequi
            incidunt officia iste, illum recusandae inventore iure ipsum odit
            nemo reprehenderit. Commodi sequi aspernatur possimus. Voluptates
            dolore magni molestias pariatur voluptatum incidunt, at facere
            reiciendis harum quis praesentium quidem, doloremque natus aliquam
            repudiandae assumenda cupiditate rem distinctio sit temporibus
            impedit molestiae! Quidem dolor, rerum esse, animi ullam nostrum
            sit, nihil iure quaerat veniam perspiciatis nisi ducimus harum sunt!
            Tenetur ad facere obcaecati deleniti quos incidunt similique quia
            optio rerum, dignissimos ea?
          </p>

          <div className='w-full aspect-[2.29] mt-12 relative rounded-xl overflow-hidden'>
            <Image
              src={RecentBlogPostImage}
              alt='Recent Blog Post Image'
              // width={619}
              // height={270}
              className='w-full h-auto object-cover'
              placeholder='blur'
              fill
            />
          </div>

          <p className='pt-10'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
            magni enim? Dignissimos maiores aliquam sint quaerat, culpa modi,
            aperiam reprehenderit, deserunt sequi facilis quos molestias quae
            sapiente laboriosam rerum exercitationem. Repellat ab esse vel rem
            iusto aliquam nostrum ipsa corporis provident consectetur rerum, sit
            at, perferendis commodi eligendi odio a, quia eum expedita iste
            repellendus soluta repudiandae incidunt blanditiis? Quas. Ullam
            veniam sunt reiciendis deserunt ratione necessitatibus at
            voluptatum, corporis laudantium iure voluptate modi vel aperiam unde
            quaerat perspiciatis aliquid dolore nulla fuga mollitia rerum
            assumenda obcaecati quia reprehenderit. Voluptatibus! Eos
            consequatur saepe expedita quisquam sit quae harum eius velit
            eligendi, nemo ipsam nostrum voluptas, suscipit et vero facere
            perspiciatis recusandae, pariatur quidem facilis impedit deserunt!
            Magni exercitationem ratione facilis.
          </p>

          <p className='pt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            possimus minus nobis, architecto doloremque nihil voluptas magnam
            quae nostrum reiciendis, repudiandae, harum officiis sunt beatae.
            Quidem animi quae doloribus adipisci. Debitis, dolorem quam earum,
            eveniet perspiciatis saepe numquam, excepturi nostrum ipsa aliquam
            doloremque fuga voluptatem fugiat ducimus quis voluptates quia
            exercitationem porro velit? Ex libero excepturi tempora minima
            voluptate suscipit? Fugiat ad accusantium a laborum ea esse quisquam
            eaque eveniet vitae provident! Odio, rem ad quidem facere autem
            dolorem est soluta totam nihil reiciendis provident deleniti
            officiis magnam aliquid dolore.
          </p>
        </section>
      </div>
    </section>
  );
};

export default BlogDetails;
