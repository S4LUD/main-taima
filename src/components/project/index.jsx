import React, { useState } from "react";
import {
  BsListTask,
  AiOutlineClockCircle,
  FiTrash2,
  FiEdit,
  AiOutlineSearch,
  AiOutlineFilter,
} from "react-icons/all";

export default function Project() {
  const [isEmpty, setEmpty] = useState(false);
  return (
    <div className="_project">
      <div className="proj-con">
        {!isEmpty ? (
          <>
            <div className="proj-wrap">
              <div className="title-header">
                <div className="title">LeBot 8.9</div>
                <div className="stat-con">
                  187
                  <BsListTask />
                </div>
              </div>
              <div className="desc">Optimze every components and functions</div>
              <div className="date-action">
                <div className="date">
                  <AiOutlineClockCircle color="#51ACFA" />
                  07 Oct
                </div>
                <div className="action">
                  <FiEdit size={16} color="#9ADD6D" />
                  <FiTrash2 size={16} color="#FA3636" />
                </div>
              </div>
            </div>
            <div className="proj-wrap">
              <div className="title-header">
                <div className="title">LeBot 8.9</div>
                <div className="stat-con">
                  187
                  <BsListTask />
                </div>
              </div>
              <div className="desc">Optimze every components and functions</div>
              <div className="date-action">
                <div className="date">
                  <AiOutlineClockCircle color="#51ACFA" />
                  07 Oct
                </div>
                <div className="action">
                  <FiEdit size={16} color="#9ADD6D" />
                  <FiTrash2 size={16} color="#FA3636" />
                </div>
              </div>
            </div>
            <div className="proj-wrap">
              <div className="title-header">
                <div className="title">LeBot 8.9</div>
                <div className="stat-con">
                  187
                  <BsListTask />
                </div>
              </div>
              <div className="desc">Optimze every components and functions</div>
              <div className="date-action">
                <div className="date">
                  <AiOutlineClockCircle color="#51ACFA" />
                  07 Oct
                </div>
                <div className="action">
                  <FiEdit size={16} color="#9ADD6D" />
                  <FiTrash2 size={16} color="#FA3636" />
                </div>
              </div>
            </div>
            <div className="proj-wrap">
              <div className="title-header">
                <div className="title">LeBot 8.9</div>
                <div className="stat-con">
                  187
                  <BsListTask />
                </div>
              </div>
              <div className="desc">Optimze every components and functions</div>
              <div className="date-action">
                <div className="date">
                  <AiOutlineClockCircle color="#51ACFA" />
                  07 Oct
                </div>
                <div className="action">
                  <FiEdit size={16} color="#9ADD6D" />
                  <FiTrash2 size={16} color="#FA3636" />
                </div>
              </div>
            </div>
            <div className="proj-wrap">
              <div className="title-header">
                <div className="title">LeBot 8.9</div>
                <div className="stat-con">
                  187
                  <BsListTask />
                </div>
              </div>
              <div className="desc">Optimze every components and functions</div>
              <div className="date-action">
                <div className="date">
                  <AiOutlineClockCircle color="#51ACFA" />
                  07 Oct
                </div>
                <div className="action">
                  <FiEdit size={16} color="#9ADD6D" />
                  <FiTrash2 size={16} color="#FA3636" />
                </div>
              </div>
            </div>
            <div className="proj-wrap">
              <div className="title-header">
                <div className="title">LeBot 8.9</div>
                <div className="stat-con">
                  187
                  <BsListTask />
                </div>
              </div>
              <div className="desc">Optimze every components and functions</div>
              <div className="date-action">
                <div className="date">
                  <AiOutlineClockCircle color="#51ACFA" />
                  07 Oct
                </div>
                <div className="action">
                  <FiEdit size={16} color="#9ADD6D" />
                  <FiTrash2 size={16} color="#FA3636" />
                </div>
              </div>
            </div>
            <div className="proj-wrap">
              <div className="title-header">
                <div className="title">LeBot 8.9</div>
                <div className="stat-con">
                  187
                  <BsListTask />
                </div>
              </div>
              <div className="desc">Optimze every components and functions</div>
              <div className="date-action">
                <div className="date">
                  <AiOutlineClockCircle color="#51ACFA" />
                  07 Oct
                </div>
                <div className="action">
                  <FiEdit size={16} color="#9ADD6D" />
                  <FiTrash2 size={16} color="#FA3636" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="empty">NO PROJECT</div>
        )}
      </div>
    </div>
  );
}
