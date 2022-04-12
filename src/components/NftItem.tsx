
import { Card, Image, Text, Group, Badge, Button, ActionIcon, useMantineTheme, createStyles, CardSection } from '@mantine/core'
import { Heart } from 'tabler-icons-react';
import { FC } from 'react';
import React from 'react';




//collection.name and name

interface cardProps {
    nft: {
        id?: number,
        num_sales?: number,
        image_url?: string,
        image_preview_url?: string,
        name?: string,
        token_id?: number,
        token_metadata?: string,
        collection?: {name: string}
    }
}
const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    section: {
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`
    },
}));
//style={{minWidth: '1vw', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}
//if last_sale, show last price

export const NftItem: FC<cardProps> = ({ nft }) => {

    // const { classes } = useStyles();
    //const theme = useMantineTheme();
    const { id, num_sales, image_url, image_preview_url, name, token_id, token_metadata,collection } = nft;
    const [isLiked, setIsLiked] = React.useState(false);
    const [likes, setLikes] = React.useState(0);

  

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikes(likes + 1);
    }
    return (

        <Card className="card" withBorder radius="md" mt="md"  >
            <CardSection>
                <Image className="image"
                    object-fit='fill'
                    src={image_url}
                    alt={name}
                    height="250px"

                />
            </CardSection>


            <CardSection mt = "md" >
                <Group align="left" style={{ marginLeft: '1vw', gap: '0', flexDirection: 'column' }}>
                <Text >{collection}</Text>
                <Text >{name}</Text> 
                </Group>
              </CardSection>
            <Group align="center" style={{ marginRight: '1vw' }}>
                <ActionIcon variant="default" radius="md" size={36}>
                    <Heart size={18} />
                </ActionIcon>
                <Text>{num_sales}</Text>
            </Group>
        </Card>

    )
}
export default NftItem;