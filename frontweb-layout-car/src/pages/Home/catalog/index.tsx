import ButtonPesquisar from 'components/BarraDePesquisa/ButtonPequisar';
import ProductCard from 'components/ProductCard';
import './styles.css';

const Catalog = () => {
  return (
    <>
      <div className="button-src">
        <div className=" base-card search-container">
          <ButtonPesquisar />
        </div>
      </div>

      <div className="container my-4">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
