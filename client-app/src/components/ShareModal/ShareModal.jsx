import React from 'react';
import './ShareModal.css';
import { Modal, useMantineTheme } from '@mantine/core';
import PostShare from '../PostShare/PostShare';

function ShareModal({ modalOpened, setModalOpened }) {
    const theme = useMantineTheme();
    return (
        <Modal
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
            overlayColor={theme.colorScheme === 'dark' ?
                theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            size={'55%'}
            overlayBlur={3}>
            <PostShare />
        </Modal>
    )
}

export default ShareModal