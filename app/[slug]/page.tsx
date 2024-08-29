import Add from '@/components/Add';
import CustomizeProducts from '@/components/CustomizeProducts';
import ProductImages from '@/components/ProductImages';

const SingleItemPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* image */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* Texts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product name</h1>
        <p className="text-gray-500">
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum
          laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto
          fuga praesentium optio, eaque rerum! Provident similique accusantium
          nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias
          architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!
          Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum
          debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae
          fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt
          excepturi expedita sint? Sed quibusdam recusandae alias error harum
          maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
          Officiis iure rerum voluptates a cumque velit{' '}
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$20</h3>
          <h2 className="font-medium text-2xl">$10</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="text-gray-500">
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum
            laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto
            fuga praesentium optio, eaque rerum! Provident similique accusantium
            nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias
            architecto voluptate aliquam nihil, eveniet aliquid culpa officia
            aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt
            ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error
            repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
            modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
            error harum maxime adipisci amet laborum. Perspiciatis minima
            nesciunt dolorem! Officiis iure rerum voluptates a cumque velit{' '}
          </p>
        </div>

        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="text-gray-500">
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum
            laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto
            fuga praesentium optio, eaque rerum! Provident similique accusantium
            nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias
            architecto voluptate aliquam nihil, eveniet aliquid culpa officia
            aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt
            ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error
            repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
            modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
            error harum maxime adipisci amet laborum. Perspiciatis minima
            nesciunt dolorem! Officiis iure rerum voluptates a cumque velit{' '}
          </p>
        </div>

        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="text-gray-500">
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum
            laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto
            fuga praesentium optio, eaque rerum! Provident similique accusantium
            nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias
            architecto voluptate aliquam nihil, eveniet aliquid culpa officia
            aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt
            ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error
            repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
            modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
            error harum maxime adipisci amet laborum. Perspiciatis minima
            nesciunt dolorem! Officiis iure rerum voluptates a cumque velit{' '}
          </p>
        </div>

        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="text-gray-500">
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum
            laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto
            fuga praesentium optio, eaque rerum! Provident similique accusantium
            nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias
            architecto voluptate aliquam nihil, eveniet aliquid culpa officia
            aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt
            ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error
            repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
            modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
            error harum maxime adipisci amet laborum. Perspiciatis minima
            nesciunt dolorem! Officiis iure rerum voluptates a cumque velit{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleItemPage;
