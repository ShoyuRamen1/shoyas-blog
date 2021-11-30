import {FC, useContext } from 'react'

import { BlogContext } from '../../lib/BlogContext'

interface MetaProps {
    inverted?: boolean;
}

const Meta: FC<MetaProps> = ({ inverted }) => {
    const { language } = useContext(BlogContext);
    return(
        <div></div>
    )
}

export default function Metalol() {
    return (
        <div>
            
        </div>
    )
}
