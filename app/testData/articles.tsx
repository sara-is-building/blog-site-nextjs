import Article from "../types/articleType";
import { TestAuthors } from "./authors";

export class TestArticles {
    static posts: Article[] = [
        {
            id: "01",
            title: 'Build Your Audience',
            href: '#',
            description:
              'Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti porttitor porttitor id ultrices sollicitudin nascetur potenti. Fringilla pellentesque efficitur mus hac; maecenas dapibus.',
              date: 'Apr 22, 2024',
              datetime: '2024-04-22',
              category: 'AWS',
            author: TestAuthors.author1,
            postImage: '/file.svg'
          },
          {
              id: "02",
              title: 'Boost your click through rate',
              href: '#',
              description:
                'Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti porttitor porttitor id ultrices sollicitudin nascetur potenti. Fringilla pellentesque efficitur mus hac; maecenas dapibus.',
                date: 'Mar 16, 2024',
                datetime: '2024-03-16',
                category: 'CDK',
              author: TestAuthors.author2,
              postImage: '/globe.svg'
            },
            {
              id: "03",
              title: 'How to improve Your Writing',
              href: '#',
              description:
                'Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti porttitor porttitor id ultrices sollicitudin nascetur potenti. Fringilla pellentesque efficitur mus hac; maecenas dapibus.',
                date: 'May 9, 2020',
                datetime: '2020-05-09',
                category: 'Java',
              author: TestAuthors.author3,
              postImage: '/globe.svg'
    
            },
    ];
}