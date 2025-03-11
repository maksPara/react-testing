import { render, screen } from '@testing-library/react';
import ProductImageGallery from '../../src/components/ProductImageGallery';

describe('ProductImageGallery', () => {
  it('should render nothing when given empty array', () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement;
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
  it('should render a list of images', () => {
    const imageUrls = ['url1', 'url2', 'url3'];
    render(<ProductImageGallery imageUrls={imageUrls} />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(imageUrls.length);

    images.forEach((img, index) => {
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', imageUrls[index]);
    });
  });
});
