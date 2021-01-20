import React, {useState} from "react";
import {Row, Col, Card, Container, Pagination} from "react-bootstrap";
import axios from "../../API/api";
import {useQuery} from "react-query";

export default function SameComponents(props) {
    const [page, setPage] = useState(1)
    const queryInfo = useQuery(['components', page], () =>
        axios.get(`/api/${props.component}?page=` + page + '&limit=10')
            .then((res) => res.data), {keepPreviousData: true}
    )

    return (
        <Container>
            <Row sm={5}>
                {queryInfo.status === 'loading' && (
                    <div className="text-center">Loading data...</div>
                )}
                {queryInfo.status === 'error' && (
                    <div className="text-danger">Error fetching data</div>
                )}
                {queryInfo.status === 'success' && (
                    queryInfo.data.results.map((d, i) => (
                        <Col className="mt-5">
                            <Card bg={"dark"}>
                                <h1 className="text-center">{d.uid}</h1>
                                <p className="h5 text-center">{d.name}</p>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
            <Pagination className="my-3">
                <Pagination.First onClick={() => setPage(old => Math.max(old - 1, 1))}
                                  disabled={page === 1} className="ml-auto"/>
                <Pagination.Item>{page}</Pagination.Item>
                <Pagination.Last onClick={() => {
                    if (!queryInfo.isPreviousData && queryInfo.data) {
                        setPage(old => old + 1)
                    }
                }} disabled={queryInfo.isPreviousData || !queryInfo.data}/>
            </Pagination>
        </Container>
    )
}
