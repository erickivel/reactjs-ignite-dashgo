import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Eric Kivel</Text>
                <Text color="gray.300" fontSize="small">
                    ericvkivel1@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Eric Kivel" src="https://github.com/erickivel.png" />
        </Flex>
    );
}