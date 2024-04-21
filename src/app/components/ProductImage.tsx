import { Product, ProductMediaType } from 'app/models/Product' // Import Product and ProductMediaType if not already imported
import React from 'react'
import { Image } from 'react-native'

interface ProductImageProps {
	productImage: Product
	width: number
	height: number
}

const ProductImage: React.FC<ProductImageProps> = ({ productImage, width, height }) => {
	const getImageUrl = (): string => {
		if (productImage && productImage.mediaGroupImages) {
			const mediaGroup = productImage.mediaGroupImages.find((media) => media.type === ProductMediaType.default)
			if (mediaGroup) {
				return mediaGroup.media.px300
			}
		}
		return 'https://example.com/default-image.jpg'
	}

	return <Image source={{ uri: getImageUrl(), width: width, height: height }} />
}

export default ProductImage
