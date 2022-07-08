import './styles.css';
import ProductImg from 'assets/images/product.png';
import ButtonComprar from 'components/ButtonComprar';

const ProductCard = () => {
  return (
    <>
      <div className="base-card product-card">
        <div className="card-top-container">
          <img src={ProductImg} alt="Nome do produto" />
        </div>

        <div className="card-botton-container">
          <h6> Audi Supra TT</h6>
          <p>
            <i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, nisi
            </i>
          </p>
        </div>
        <div className="btn-comprar">
          <div>
            <ButtonComprar />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
