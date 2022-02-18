import {DownloadButton} from './DownloadButton';
import { ImageArticle } from './ImageArticle';
import { Paragraph } from './Paragraph';
import { QuoteBlock } from './QuoteBlock';

const componentIndex = {
  'paragraph': Paragraph,
  'image': ImageArticle,
  'quote': QuoteBlock,
  'btn': DownloadButton,
};

export default componentIndex;
