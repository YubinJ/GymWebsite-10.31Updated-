import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

function MembershipForm() {
  return (
    <Box p="4" bg="blue.100" m="2">
      <Table mt="4" variant="simple">
        <Thead>
          <Tr>
            <Th>クラス</Th>
            <Th>入会金</Th>
            <Th>月謝</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>一般クラス</Td>
            <Td>11,000円（税込）</Td>
            <Td>11,000円（税込）</Td>
          </Tr>
          <Tr>
            <Td>女子クラス</Td>
            <Td>5,500円（税込）</Td>
            <Td>7,700円（税込）</Td>
          </Tr>
          <Tr>
            <Td>大学生クラス</Td>
            <Td>11,000円（税込）</Td>
            <Td>9,900円（税込）</Td>
          </Tr>
          <Tr>
            <Td>高校生クラス</Td>
            <Td>11,000円（税込）</Td>
            <Td>6,600円（税込）</Td>
          </Tr>
          <Tr>
            <Td>中学生クラス</Td>
            <Td>6,600円（税込）</Td>
            <Td>6,600円（税込）</Td>
          </Tr>
          <Tr>
            <Td>キッズクラス※</Td>
            <Td>5,500円（税込）</Td>
            <Td>5,500円（税込）</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}

export default MembershipForm;
