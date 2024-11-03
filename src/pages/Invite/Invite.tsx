import { PAGE_URI } from 'constants/pageUri'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Invite = () => {
    const nav = useNavigate()
    const param = useParams()

    const groupCode = param.groupCode;

    useEffect(() => {

      nav(PAGE_URI.GROUP, {state: {inviteCode : groupCode}})

    },[])

  return (
    <div>Invitation</div>
  )
}
