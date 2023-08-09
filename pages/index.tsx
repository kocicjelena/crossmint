import Link from 'next/link'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import NavHeader from '../components/Nav/NavHeader'
import MakeMetaverse from '../components/MakeMetaverse/MakeMetaverse'

const IndexPage = () => (
      <>
      <Layout title="Metaverse">
        <MakeMetaverse />
        </Layout>
      </>
      )


export default IndexPage
